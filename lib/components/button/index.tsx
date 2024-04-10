import { getStyle, type Size } from './style'

export function Button(props: {
    size?: Size
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { size } = props;

    return <button {...props} className={getStyle({ size })}/>
}