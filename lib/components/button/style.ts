import { css } from '../../../styled-system/css';

export type Size = 's' | 'm' | 'l';

export function getStyle({ size = 's' }: {
    size?: Size
}) {

    return css({
        fontSize: '2xl',
        fontWeight: 'bold',
        padding: 2,
        appearance: 'button',
        backgroundColor: 'blue.300',
        borderRadius: '2xl'
    });
};
