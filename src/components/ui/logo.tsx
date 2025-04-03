import Image from 'next/image'

export const Logo = ({ size }: { size: number }) => {
    return (
        <Image
            src="/images/logo.png"
            alt='Logo'
            width={size}
            height={size}
        />
    )
}

export const LogoIcon = ({ size = 26 }: { size?: number }) => {
    return <Image src="/images/logo.png" alt="" width={size} height={size} />
}
