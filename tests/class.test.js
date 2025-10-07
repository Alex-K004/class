const {
  Character,
  Bowman,
  Swordsman,
  Magician,
  Undead,
  Zombie,
  Daemon,
} = require('../src/class');

describe('Character Classes', () => {
  describe('Base Character Class', () => {
    test('should create character with default values', () => {
      const char = new Bowman('Legolas');

      expect(char.name).toBe('Legolas');
      expect(char.type).toBe('Bowman');
      expect(char.health).toBe(100);
      expect(char.level).toBe(1);
      expect(char.attack).toBe(25);
      expect(char.defence).toBe(25);
    });

    test('should throw error for invalid name length (< 2)', () => {
      expect(() => new Bowman('A')).toThrow('Имя должно содержать от 2 до 10 символов');
    });

    test('should throw error for invalid name length (> 10)', () => {
      expect(() => new Bowman('VeryLongName123')).toThrow('Имя должно содержать от 2 до 10 символов');
    });

    test('should throw error for non-string name', () => {
      expect(() => new Bowman(123)).toThrow('Имя должно быть строкой');
      expect(() => new Bowman(null)).toThrow('Имя должно быть строкой');
      expect(() => new Bowman(undefined)).toThrow('Имя должно быть строкой');
      expect(() => new Bowman({})).toThrow('Имя должно быть строкой');
    });

    test('should throw error for invalid type', () => {
      expect(() => new Character('Test', 'InvalidType')).toThrow('Неверный тип персонажа');
    });

    test('should accept valid name boundaries', () => {
      expect(() => new Bowman('Ab')).not.toThrow();
      expect(() => new Bowman('ABCDEFGHIJ')).not.toThrow();
    });
  });

  describe('Character Types and Stats', () => {
    test('Bowman should have correct stats', () => {
      const bowman = new Bowman('Legolas');
      expect(bowman.attack).toBe(25);
      expect(bowman.defence).toBe(25);
    });

    test('Swordsman should have correct stats', () => {
      const swordsman = new Swordsman('Aragorn');
      expect(swordsman.attack).toBe(40);
      expect(swordsman.defence).toBe(10);
    });

    test('Magician should have correct stats', () => {
      const magician = new Magician('Gandalf');
      expect(magician.attack).toBe(10);
      expect(magician.defence).toBe(40);
    });

    test('Undead should have correct stats', () => {
      const undead = new Undead('Lich');
      expect(undead.attack).toBe(25);
      expect(undead.defence).toBe(25);
    });

    test('Zombie should have correct stats', () => {
      const zombie = new Zombie('Walker');
      expect(zombie.attack).toBe(40);
      expect(zombie.defence).toBe(10);
    });

    test('Daemon should have correct stats', () => {
      const daemon = new Daemon('Demon');
      expect(daemon.attack).toBe(10);
      expect(daemon.defence).toBe(40);
    });
  });
  
  describe('All Character Types Creation', () => {
    test('should create all character types without errors', () => {
      expect(() => new Bowman('Bowman')).not.toThrow();
      expect(() => new Swordsman('Swordsman')).not.toThrow();
      expect(() => new Magician('Magician')).not.toThrow();
      expect(() => new Undead('Undead')).not.toThrow();
      expect(() => new Zombie('Zombie')).not.toThrow();
      expect(() => new Daemon('Daemon')).not.toThrow();
    });

    test('all characters should inherit from Character', () => {
      const bowman = new Bowman('Test');
      expect(bowman instanceof Character).toBe(true);

      const swordsman = new Swordsman('Test');
      expect(swordsman instanceof Character).toBe(true);
    });
  });
});