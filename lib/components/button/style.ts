import { css } from '../../styled-system/css';

export type Size = 's' | 'm' | 'l';

export function getStyle({ size = 's' }: {
    size?: Size
}) {

    return css({
        fontSize: 'm',
        fontWeight: 'bold',
        appearance: 'button',
        backgroundColor: 'blue.300',
        borderRadius: '2xl',
        width: size,
        padding: '2'
    });
};
