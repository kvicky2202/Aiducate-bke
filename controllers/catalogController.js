import prisma from '../config/db.js';

export const getWardrobeItems = async (_req, res) => {
  try {
    res.json(await prisma.wardrobeItem.findMany());
  } catch (error) {
    console.error('getWardrobeItems', error);
    res.status(500).json({ message: 'Failed to load wardrobe.' });
  }
};

export const getAiVoices = async (_req, res) => {
  try {
    res.json(await prisma.aiVoice.findMany());
  } catch (error) {
    console.error('getAiVoices', error);
    res.status(500).json({ message: 'Failed to load voices.' });
  }
};
