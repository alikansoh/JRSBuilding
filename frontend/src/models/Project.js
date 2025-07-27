// models/Project.js
import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String }],
  date: { type: Date, required: true },        
  location: { type: String, required: true },  
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
