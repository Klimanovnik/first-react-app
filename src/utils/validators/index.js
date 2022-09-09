export const required = (value) => {
    return value ? undefined : 'The field is required';
};

export const maxLengthCreator = (length) => {
    return (value) => {
        return value?.length > length
            ? `Length greater than ${length} symbols`
            : undefined;
    };
};
