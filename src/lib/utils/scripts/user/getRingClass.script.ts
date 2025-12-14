/**
 * Returns the appropriate Tailwind ring color class based on Steam persona state
 * @param {number} personaState  Steam persona state (0-6)
 * @returns {string} Tailwind CSS ring color class
 * @example
 * getRingClass(0) // returns 'ring-gray-500' (Offline)
 * getRingClass(1) // returns 'ring-blue-500' (Online)
 * getRingClass(6) // returns 'ring-lime-700' (Looking to play)
 */
export function getRingClass(personaState: number): string {
	const ringClasses = {
		0: 'ring-gray-500', // Offline
		1: 'ring-blue-500', // Online
		2: 'ring-red-600', // Busy
		3: 'ring-cyan-500', // Away
		4: 'ring-yellow-500', // Snooze
		5: 'ring-purple-500', // Looking to trade
		6: 'ring-lime-700' // Looking to play
	};
	return ringClasses[personaState as keyof typeof ringClasses] || 'ring-gray-500';
}
