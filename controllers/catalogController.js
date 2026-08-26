import prisma from '../config/db.js';
import { shapeGrowthJourney } from '../utils/serializers.js';

export const getCodeLabProgress = async (_req, res) => {
  try {
    const row = await prisma.codeLabProgress.findUnique({ where: { id: 'singleton' } });
    if (!row) return res.status(404).json({ message: 'Code lab progress not found.' });
    const { id, ...rest } = row;
    res.json(rest);
  } catch (error) {
    console.error('getCodeLabProgress', error);
    res.status(500).json({ message: 'Failed to load code lab progress.' });
  }
};

export const getCodeModules = async (_req, res) => {
  try {
    const modules = await prisma.codeModule.findMany();
    res.json(modules);
  } catch (error) {
    console.error('getCodeModules', error);
    res.status(500).json({ message: 'Failed to load code modules.' });
  }
};

export const getGrowthJourney = async (_req, res) => {
  try {
    const row = await prisma.growthJourney.findUnique({ where: { id: 'singleton' } });
    if (!row) return res.status(404).json({ message: 'Growth journey not found.' });
    res.json(shapeGrowthJourney(row));
  } catch (error) {
    console.error('getGrowthJourney', error);
    res.status(500).json({ message: 'Failed to load growth journey.' });
  }
};

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
