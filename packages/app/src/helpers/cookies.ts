export function getCookie (name: string): string | null{
  const nameLenPlus = (name.length + 1);

	return document.cookie
		.split(';')
		.map(cookie => cookie.trim())
		.filter(cookie => {
			return cookie.substring(0, nameLenPlus) === `${name}=`;
		})
		.map(cookie => {
			return decodeURIComponent(cookie.substring(nameLenPlus));
		})[0] || null;
} 

export function cookieExists(name: string): boolean {
	return getCookie(name) != null;
}