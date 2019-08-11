export const isListener = (name: string) => name.startsWith('on');

export const isAttribute = (name: string) => !isListener(name) && name !== 'children';