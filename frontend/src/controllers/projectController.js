import Project from '@/models/Project';
import mongoose from 'mongoose';
import formidable from 'formidable';
import cloudinary from '@/lib/cloudinary';
import dbConnect from '@/lib/dbConnect'; 


export const config = {
  api: {
    bodyParser: false,
  },
};

export const getProjects = async (req, res) => {
  try {
    await dbConnect()
    const projects = await Project.find({});
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const createProject = async (req, res) => {
  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ success: false, error: 'Error parsing form' });
  
    const fixField = (field) => {
      if (Array.isArray(field)) return field[0];
      return field;
    };
  
    try {
      let imageUrls = [];
      
      // Only process images if they exist
      if (files.images) {
        const images = Array.isArray(files.images) ? files.images : [files.images];
        
        // Filter out any undefined/null images
        const validImages = images.filter(img => img && img.filepath);
        
        if (validImages.length > 0) {
          const uploadedImages = await Promise.all(
            validImages.map((img) =>
              cloudinary.uploader.upload(img.filepath, {
                folder: 'projects',
              })
            )
          );
          
          imageUrls = uploadedImages.map((r) => r.secure_url);
        }
      }
  
      const newProject = await Project.create({
        title: fixField(fields.title),
        description: fixField(fields.description),
        date: new Date(fixField(fields.date)),
        location: fixField(fields.location),
        images: imageUrls,
      });
  
      res.status(201).json({ success: true, data: newProject });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });
};

export const getProjectById = async (req, res) => {
  const { id } = req.query;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, error: 'Invalid project ID' });
  }
  try {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ success: false, error: 'Project not found' });
    }
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.query;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, error: 'Invalid project ID' });
  }

  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ success: false, error: 'Error parsing form' });

    const fixField = (field) => {
      if (Array.isArray(field)) return field[0];
      return field;
    };

    try {
      const existingProject = await Project.findById(id);
      if (!existingProject) {
        return res.status(404).json({ success: false, error: 'Project not found' });
      }

      let imageUrls = existingProject.images;

      // Only update images if new ones are provided
      if (files.images) {
        const newImages = Array.isArray(files.images) ? files.images : [files.images];
        
        // Filter out any undefined/null images
        const validImages = newImages.filter(img => img && img.filepath);
        
        if (validImages.length > 0) {
          const uploaded = await Promise.all(
            validImages.map((img) =>
              cloudinary.uploader.upload(img.filepath, {
                folder: 'projects',
              })
            )
          );

          imageUrls = uploaded.map((r) => r.secure_url);
        }
      }

      const updatedProject = await Project.findByIdAndUpdate(
        id,
        {
          title: fixField(fields.title),
          description: fixField(fields.description),
          date: new Date(fixField(fields.date)),
          location: fixField(fields.location),
          images: imageUrls,
        },
        { new: true, runValidators: true }
      );

      res.status(200).json({ success: true, data: updatedProject });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });
};

export const deleteProject = async (req, res) => {
  const { id } = req.query;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, error: 'Invalid project ID' });
  }
  try {
    const deleted = await Project.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, error: 'Project not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};