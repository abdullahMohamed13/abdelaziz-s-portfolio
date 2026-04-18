
interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'link' | 'button';
    href?: string;
    onClick?: () => void;
    download?: boolean;
    target?: React.HTMLAttributeAnchorTarget;
    rel?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export default function Button({
    className,
    variant = 'button',
    children,
    href,
    download = false,
    onClick,
    target,
    rel,
    type = 'button',
    disabled = false,
}: ButtonProps) {

    const style = 'cursor-pointer inline-flex w-full py-2 items-center justify-center rounded-md bg-black px-6 text-[1rem] font-semibold text-white transition-colors duration-200 hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-70'
    return <>
        {variant === 'link' ? (
            <a
                href={`${href}`}
                className={`${style} ${className}`}
                download={download}
                onClick={onClick}
                target={target}
                rel={rel}
            >
                {children}
            </a>
        ) : (
            <button
                className={`${style} ${className}`}
                onClick={onClick}
                type={type}
                disabled={disabled}
            >
                {children}
            </button>
    )}
  </>
}
