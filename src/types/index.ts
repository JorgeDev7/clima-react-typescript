type SearchType = {
    city: string,
    country: string;
};

type Country = {
    code: string,
    name: string;
};

type Weather = {
    name: string,
    main: {
        temp: number,
        temp_max: number,
        temp_min: number;
    };
};