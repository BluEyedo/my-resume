import { GoogleGenAI, Type } from "@google/genai";
import { ResumeData } from '../types';

const apiKey = process.env.API_KEY;
const ai = new GoogleGenAI({ apiKey });

const modelName = "gemini-2.5-flash";

// Helper to generate a unique ID
const generateId = () => Math.random().toString(36).substr(2, 9);

export const parseResumeFromText = async (text: string): Promise<Partial<ResumeData>> => {
  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: `Parse the following resume text into a structured JSON format. Infer missing fields where reasonable, or leave empty. 
      For skills, assign a proficiency level between 0 and 100 based on context (e.g., "Senior" implies high level).
      Categorize skills into 'frontend', 'backend', 'tools', or 'soft-skills'.
      
      Resume Text:
      ${text}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            fullName: { type: Type.STRING },
            title: { type: Type.STRING },
            summary: { type: Type.STRING },
            contact: {
              type: Type.OBJECT,
              properties: {
                email: { type: Type.STRING },
                phone: { type: Type.STRING },
                location: { type: Type.STRING },
                linkedin: { type: Type.STRING },
                website: { type: Type.STRING },
              }
            },
            skills: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  level: { type: Type.NUMBER },
                  category: { type: Type.STRING, enum: ['frontend', 'backend', 'tools', 'soft-skills'] }
                }
              }
            },
            experience: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  company: { type: Type.STRING },
                  role: { type: Type.STRING },
                  startDate: { type: Type.STRING },
                  endDate: { type: Type.STRING },
                  description: { type: Type.STRING },
                  technologies: { type: Type.ARRAY, items: { type: Type.STRING } }
                }
              }
            },
            projects: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  tags: { type: Type.ARRAY, items: { type: Type.STRING } }
                }
              }
            }
          }
        }
      }
    });

    const parsed = JSON.parse(response.text || "{}");
    
    // Hydrate with IDs and placeholders for missing visuals
    if (parsed.experience) {
      parsed.experience = parsed.experience.map((exp: any) => ({ ...exp, id: generateId() }));
    }
    if (parsed.projects) {
      parsed.projects = parsed.projects.map((proj: any) => ({
        ...proj,
        id: generateId(),
        imageUrl: `https://picsum.photos/seed/${generateId()}/600/400`, // Generate random image
        link: "#"
      }));
    }

    return parsed;
  } catch (error) {
    console.error("Error parsing resume:", error);
    throw error;
  }
};

export const enhanceDescription = async (text: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: `Rewrite the following professional resume description to be more impactful, action-oriented, and concise. Use strong verbs. Return only the text.
      
      Text: "${text}"`,
    });
    return response.text || text;
  } catch (error) {
    console.error("Error enhancing text:", error);
    return text;
  }
};
