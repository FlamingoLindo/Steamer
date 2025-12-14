import country_list from '../country_list.json';

export function getCountry(countrycode: string): { countryname: string; flag_url: string } {
	const country = country_list.find((c) => c.countrycode === countrycode);

	if (!country) {
		throw new Error(`Country with code "${countrycode}" not found`);
	}

	return {
		countryname: country.countryname,
		flag_url: country.flag_url
	};
}
