import { Icon } from "lucide-react";
import { CSSProperties, HTMLAttributes } from "react";

interface IconProps {
    className? : string;
    style?: React.CSSProperties;
}

export const HomeIcon = ({ className, style }:IconProps) => {
    return (
        <svg  className={className} style={style}  viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.766 25.5h-1.532c-2.01 0-3.41-.002-4.494-.105-1.06-.102-1.66-.29-2.108-.569a4.5 4.5 0 0 1-1.458-1.458c-.278-.449-.467-1.048-.569-2.108-.103-1.084-.105-2.485-.105-4.494 0-1.773.018-2.323.176-2.802.097-.295.232-.575.403-.834.278-.421.699-.776 2.09-1.876l3.245-2.568c.996-.788 1.659-1.31 2.208-1.662.524-.336.828-.438 1.078-.468a2.5 2.5 0 0 1 .6 0c.25.03.554.132 1.078.468.55.353 1.212.874 2.208 1.662l3.246 2.568c1.39 1.1 1.81 1.455 2.089 1.876.17.259.306.54.403.834.158.48.176 1.03.176 2.802 0 2.01-.002 3.41-.105 4.494-.102 1.06-.29 1.66-.569 2.108a4.5 4.5 0 0 1-1.458 1.458c-.449.278-1.048.467-2.108.569-1.084.103-2.484.105-4.494.105ZM5 16.766c0-1.673 0-2.51.25-3.271.14-.421.333-.822.577-1.191.442-.67 1.098-1.189 2.41-2.227l3.247-2.567c1.945-1.539 2.918-2.308 4.035-2.444a4 4 0 0 1 .962 0c1.117.136 2.09.905 4.035 2.444l3.246 2.567c1.313 1.038 1.969 1.557 2.41 2.227a5 5 0 0 1 .577 1.19c.251.762.251 1.599.251 3.272 0 3.96 0 5.94-.898 7.392a6 6 0 0 1-1.944 1.944C22.706 27 20.726 27 16.766 27h-1.532c-3.96 0-5.94 0-7.392-.898a6 6 0 0 1-1.944-1.944C5 22.706 5 20.726 5 16.766Zm9.595-1.063a2.996 2.996 0 0 1 2.81 0c.52.276.845.816.845 1.405v4.843h-4.5v-4.843c0-.589.325-1.13.845-1.405Zm3.514-1.325c-1.319-.7-2.9-.7-4.218 0a3.09 3.09 0 0 0-1.641 2.73V22.2c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-5.093a3.09 3.09 0 0 0-1.64-2.73Z"></path></svg>
    )
}

export const ActiveHomeIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 13.495C5 14.255 5 15.093 5 16.765c0 3.96 0 5.94.898 7.392a6 6 0 0 0 1.944 1.944C9.293 27 11.274 27 15.234 27h1.532c3.96 0 5.94 0 7.392-.898a6 6 0 0 0 1.944-1.944C27 22.706 27 20.726 27 16.766c0-1.673 0-2.51-.25-3.271a5 5 0 0 0-.577-1.191c-.442-.67-1.098-1.189-2.41-2.227L20.515 7.51c-1.945-1.539-2.918-2.308-4.035-2.444a4 4 0 0 0-.962 0c-1.117.136-2.09.905-4.035 2.444l-3.246 2.567c-1.313 1.038-1.969 1.557-2.41 2.227-.245.37-.439.77-.577 1.19ZM19 17.108V22.2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5.093c0-.866.478-1.661 1.243-2.068a3.745 3.745 0 0 1 3.514 0A2.341 2.341 0 0 1 19 17.108Z" fill="currentColor"></path></svg>
    )
}

export const ProjectsIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 32 33" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.041 9.447a2.062 2.062 0 0 0 1.845 1.14H23a2.5 2.5 0 0 1 2.5 2.5v.615H6.524l.005-3.006a3.5 3.5 0 0 1 3.5-3.494h4.036a3 3 0 0 1 2.683 1.658l.293.587Zm-10.52 5.755-.01 6.492a4.5 4.5 0 0 0 4.5 4.508H21a4.5 4.5 0 0 0 4.5-4.5v-6.5H6.521Zm7.544-9.5h-4.036a5 5 0 0 0-5 4.992L5.01 21.692a6 6 0 0 0 6 6.01H21a6 6 0 0 0 6-6v-8.615a4 4 0 0 0-4-4h-4.114a.563.563 0 0 1-.503-.311l-.293-.586a4.5 4.5 0 0 0-4.025-2.488Z"></path></svg>
    )
}

export const ActiveProjectsIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 32 33" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.029 5.702h4.036A4.5 4.5 0 0 1 18.09 8.19l.293.586c.095.19.29.31.503.31H23a4 4 0 0 1 4 4v.616h-3.219v-.5a1 1 0 0 0-1-1H9.22a1 1 0 0 0-1 1v.5H5.024l.005-3.008a5 5 0 0 1 5-4.992Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.021 15.202v.016H5c-.476 0-.926.188-1.222.51a1.21 1.21 0 0 0-.297 1.143l1.812 6.711h.018a6.003 6.003 0 0 0 5.7 4.12H21a6.002 6.002 0 0 0 5.913-4.974l1.605-5.852a1.21 1.21 0 0 0-.294-1.147c-.296-.323-.747-.511-1.224-.511v-.016H5.021Zm-.002 1.363H5l.019.07v-.07Z"></path></svg>
    )
}

export const TemplateIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 32 33" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#_3114310361__a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 25.968c-2.368 0-4.021-.002-5.287-.141-1.24-.136-1.919-.388-2.415-.76a4.501 4.501 0 0 1-.897-.897c-.372-.496-.624-1.176-.76-2.414-.139-1.266-.141-2.92-.141-5.288 0-2.368.002-4.021.141-5.287.136-1.24.388-1.919.76-2.415a4.5 4.5 0 0 1 .897-.896c.496-.373 1.176-.625 2.415-.76 1.266-.14 2.919-.142 5.287-.142.732 0 1.395 0 2 .005v18.99c-.605.005-1.268.005-2 .005Zm3.5-.03c.677-.02 1.265-.054 1.788-.111 1.238-.136 1.918-.388 2.414-.76.34-.255.641-.557.897-.897.372-.496.624-1.176.76-2.414.139-1.266.141-2.92.141-5.288v-1h-6v10.47Zm5.99-11.97c-.013-1.118-.047-2.023-.131-2.787-.136-1.24-.388-1.919-.76-2.415a4.501 4.501 0 0 0-.897-.896c-.496-.373-1.176-.625-2.415-.76a22.782 22.782 0 0 0-1.787-.112v6.97h5.99ZM5 16.468C5 11.8 5 9.466 6.202 7.866A6 6 0 0 1 7.397 6.67C8.998 5.468 11.332 5.468 16 5.468c4.668 0 7.002 0 8.602 1.202a6 6 0 0 1 1.196 1.196C27 9.466 27 11.8 27 16.468s0 7.002-1.202 8.603c-.34.453-.742.855-1.195 1.195-1.601 1.202-3.935 1.202-8.603 1.202-4.668 0-7.002 0-8.603-1.202a6 6 0 0 1-1.195-1.195C5 23.47 5 21.136 5 16.468Z"></path></g><defs><clipPath id="_3114310361__a"><rect y=".468" width="32" height="32" rx="8" fill="#fff"></rect></clipPath></defs></svg>
    )
}

export const ActiveTemplateIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 32 33" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16 5.468c.744 0 1.428 0 2.06.005v21.99c-.632.005-1.316.005-2.06.005-4.668 0-7.002 0-8.603-1.202a6 6 0 0 1-1.195-1.195C5 23.47 5 21.136 5 16.468 5 11.8 5 9.466 6.202 7.866A6 6 0 0 1 7.397 6.67C8.998 5.468 11.332 5.468 16 5.468ZM24.602 26.266c-1.128.848-2.622 1.098-5.042 1.171V15.468H27v1c0 4.668 0 7.002-1.202 8.603-.34.453-.742.855-1.195 1.195ZM26.99 13.968h-7.43v-8.47c2.42.074 3.914.324 5.043 1.172a6 6 0 0 1 1.195 1.196c.965 1.285 1.155 3.043 1.193 6.102Z"></path></svg>
    )
}

export const BrandIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 32 33" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.405 19.276a3.535 3.535 0 1 1 7.07 0 3.535 3.535 0 0 1-7.07 0Zm3.535-2.035a2.035 2.035 0 1 0 0 4.07 2.035 2.035 0 0 0 0-4.07Z"></path><path d="M10.716 19.276a2.035 2.035 0 0 1 3.249-1.633.75.75 0 0 0 .896-1.203 3.535 3.535 0 1 0-.022 5.687.75.75 0 1 0-.887-1.21 2.035 2.035 0 0 1-3.236-1.642Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m6.151 12.286 7.02-5.89a5.292 5.292 0 0 1 7.456.652l.272.324a5.29 5.29 0 0 1 4.131 3.416l.449 1.231a5.289 5.289 0 0 1 2.534 4.517v5.416a5.292 5.292 0 0 1-5.292 5.292H9.305a5.292 5.292 0 0 1-5.292-5.292v-5.416c0-1.74.84-3.286 2.138-4.25Zm4.666-1.957 3.319-2.784a3.794 3.794 0 0 1 4.743-.107 5.244 5.244 0 0 1-.631.187L7.599 11.5l3.218-1.17Zm12.812.993-.008-.021a3.792 3.792 0 0 0-4.86-2.267l-6.073 2.21h10.033c.31 0 .613.027.908.078ZM9.305 12.744H22.72a3.792 3.792 0 0 1 3.792 3.792v5.416a3.792 3.792 0 0 1-3.792 3.792H9.305a3.792 3.792 0 0 1-3.792-3.792v-5.416a3.792 3.792 0 0 1 3.792-3.792Z"></path></svg>
    )
}

export const ActiveBrandIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 32 33" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m9.661 9.34-3.51 2.946a5.284 5.284 0 0 0-2.138 4.25v5.416a5.292 5.292 0 0 0 5.292 5.292H22.72a5.292 5.292 0 0 0 5.292-5.292v-5.416a5.289 5.289 0 0 0-2.534-4.517l-.448-1.231a5.29 5.29 0 0 0-4.132-3.416l-.272-.324a5.292 5.292 0 0 0-7.456-.652L9.661 9.34Zm4.475-1.795-3.319 2.784L7.599 11.5l10.649-3.875a5.335 5.335 0 0 1 .63-.187 3.794 3.794 0 0 0-4.742.107ZM23.62 11.3l.008.021a5.327 5.327 0 0 0-.908-.078H12.688l6.073-2.21a3.792 3.792 0 0 1 4.86 2.267Zm-4.681 4.44a3.535 3.535 0 1 0 0 7.07 3.535 3.535 0 0 0 0-7.07Zm-2.035 3.535a2.035 2.035 0 1 1 4.07 0 2.035 2.035 0 0 1-4.07 0ZM12.75 17.24a2.035 2.035 0 1 0 1.202 3.677.75.75 0 0 1 .887 1.21 3.535 3.535 0 1 1 .022-5.687.75.75 0 1 1-.896 1.202 2.022 2.022 0 0 0-1.214-.402Z"></path></svg>
    )
}


export const ProIcon = ({ className, style }:IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24"><path fill="currentColor" d="M11.25 5.86a2 2 0 1 1 1.5 0c1.08 2.84 2.24 4.27 3.33 4.4 1.2.13 2.3-.42 3.33-1.73a.8.8 0 0 1 .15-.14A2 2 0 0 1 21 5a2 2 0 1 1-.25 3.98.8.8 0 0 1-.02.2l-1.62 6.49a2.75 2.75 0 0 1-2.67 2.08H7.56a2.75 2.75 0 0 1-2.67-2.08L3.27 9.18a.81.81 0 0 1-.02-.2L3 9a2 2 0 1 1 1.44-.61c.06.04.1.1.16.16.99 1.3 2.07 1.84 3.32 1.7 1.14-.12 2.29-1.55 3.33-4.4zm-4.9 9.44c.14.56.64.95 1.21.95h8.88c.57 0 1.07-.39 1.21-.95l1.04-4.14c-.86.5-1.79.7-2.77.59-1.52-.17-2.8-1.46-3.91-3.8-1.1 2.34-2.38 3.62-3.93 3.8a4.5 4.5 0 0 1-2.76-.56l1.03 4.11zM18 19.75a.75.75 0 1 1 0 1.5H6a.75.75 0 1 1 0-1.5h12z"></path></svg>
    )
}

export const ActiveProIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.91 4.91a1.91 1.91 0 0 1-1.044 1.701c.942 2.366 1.928 3.53 2.795 3.622.982.104 1.88-.323 2.76-1.377a.977.977 0 0 1 .072-.078 1.91 1.91 0 1 1 1.468.873l-1.423 5.42c-.297 1.13-1.363 1.922-2.586 1.922H8.066c-1.223 0-2.29-.792-2.586-1.922L4.063 9.675a1.91 1.91 0 1 1 1.46-.898c.03.028.059.06.086.093.837 1.048 1.727 1.471 2.748 1.363.908-.096 1.888-1.253 2.793-3.614a1.91 1.91 0 1 1 2.76-1.71ZM6.561 19.008h10.875c.518 0 .938.448.938 1s-.42 1-.938 1H6.563c-.517 0-.937-.448-.937-1s.42-1 .937-1Z" fill="currentColor"></path></svg>
    )
}


export const CertificateIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.723 6.61c.081-1.27 1.203-2.388 2.48-2.47 3.29-.2 6.56-.262 9.837-.186a2.423 2.423 0 0 1 1.513.598 333.56 333.56 0 0 0 1.926 1.638c.641.523 1.287 1.045 1.935 1.565.582.467.945 1.144.975 1.843a154.21 154.21 0 0 1-.113 15.814c-.078 1.275-1.205 2.398-2.486 2.475a116.42 116.42 0 0 1-13.58 0c-1.278-.077-2.404-1.196-2.486-2.47A153.978 153.978 0 0 1 6.723 6.61Z" fill="currentColor"></path><path d="M15.576 11.987a.5.5 0 0 1 .895 0l1.01 2.034a.5.5 0 0 0 .375.272l2.247.333a.5.5 0 0 1 .276.851l-1.622 1.59a.5.5 0 0 0-.143.44l.378 2.24a.5.5 0 0 1-.724.526l-2.013-1.052a.5.5 0 0 0-.463 0l-2.013 1.052a.5.5 0 0 1-.724-.527l.377-2.239a.5.5 0 0 0-.143-.44l-1.622-1.59a.5.5 0 0 1 .277-.851l2.247-.333a.5.5 0 0 0 .374-.272l1.01-2.034Z" fill="#fff"></path></svg>
    )
}


export const BrainStormIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.85 6.404c-1.388-1.388-3.794-1.388-8.42-1.388h-3.98c-4.719 0-7.032 0-8.513 1.48-1.573 1.481-1.573 3.794-1.573 8.514v2.313c0 4.72 0 7.033 1.48 8.514 1.481 1.48 3.794 1.48 8.514 1.48h3.979c4.72 0 7.033 0 8.514-1.48 1.48-1.48 1.48-3.887 1.48-8.606v-2.314c.093-4.627.093-7.125-1.48-8.513Z" fill="currentColor"></path><path d="M19.129 11.679c.73 0 1.31.247 1.74.743.42.496.631 1.235.631 2.217 0 1.347-.35 2.479-1.052 3.395-.711.926-1.759 1.689-3.143 2.287l-.996-2.202a7.162 7.162 0 0 0 2.329-.856c.692-.412 1.146-.866 1.36-1.361-.205.112-.504.168-.897.168-.683 0-1.23-.206-1.642-.617-.411-.412-.617-.936-.617-1.572 0-.645.21-1.174.631-1.585.412-.412.964-.617 1.656-.617Zm-5.809 0c.73 0 1.31.247 1.74.743.42.496.631 1.235.631 2.217 0 1.347-.35 2.479-1.052 3.395-.71.926-1.758 1.689-3.143 2.287L10.5 18.12a7.16 7.16 0 0 0 2.33-.856c.691-.412 1.145-.866 1.36-1.361-.206.112-.505.168-.898.168-.683 0-1.23-.206-1.642-.617-.411-.412-.617-.936-.617-1.572 0-.645.21-1.174.632-1.585.411-.412.963-.617 1.655-.617Z" fill="#fff"></path></svg>
    )
}

export const DocIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 3c4.691 0 7.037 0 8.653 1.24a6 6 0 0 1 1.107 1.107C27 6.963 27 9.31 27 14v4c0 4.691 0 7.037-1.24 8.653-.32.416-.691.788-1.107 1.107C23.037 29 20.69 29 16 29c-4.691 0-7.037 0-8.653-1.24a6 6 0 0 1-1.107-1.107C5 25.037 5 22.69 5 18v-4c0-4.691 0-7.037 1.24-8.653A6 6 0 0 1 7.347 4.24C8.963 3 11.31 3 16 3Zm5.63 22H10.465c-1.307 0-1.793-1.274-1.12-2.316l1.493-2.355c.635-1.042 2.277-1.042 2.912 0l.71 1.12 2.315-3.667c.634-1.043 2.277-1.043 2.912 0l3.062 4.902c.672 1.042.149 2.316-1.12 2.316ZM23 8.5A1.5 1.5 0 0 0 21.5 7h-11a1.5 1.5 0 1 0 0 3h11A1.5 1.5 0 0 0 23 8.5Zm-1.5 3a1.5 1.5 0 0 1 0 3h-11a1.5 1.5 0 0 1 0-3h11Zm-9.5 6a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" fill="currentColor"></path></svg>
    )
}

export const WhiteBoardIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.288 6.285C3 7.92 3 10.313 3 15.1v1.8c0 4.787 0 7.18 1.288 8.815a6 6 0 0 0 .997.997C6.92 28 9.313 28 14.1 28h3.8c4.787 0 7.18 0 8.815-1.288.37-.292.705-.627.997-.997C29 24.08 29 21.687 29 16.9v-1.8c0-4.787 0-7.18-1.288-8.815a6 6 0 0 0-.997-.997C25.08 4 22.687 4 17.9 4h-3.8C9.313 4 6.92 4 5.285 5.288a6 6 0 0 0-.997.997Zm17.708 7.152c.006.829.676 1.5 1.504 1.5a1.49 1.49 0 0 0 1.495-1.5c-.024-2.14-.156-3.84-.874-4.558s-2.44-.85-4.59-.874a1.49 1.49 0 0 0-1.5 1.495c0 .828.672 1.498 1.5 1.504a49.94 49.94 0 0 1 1.878.04c.143.031.29.083.377.17.087.088.139.235.17.378.023.468.035 1.133.04 1.845ZM10.004 18.5A1.507 1.507 0 0 0 8.5 17a1.49 1.49 0 0 0-1.495 1.5c.024 2.158.155 3.903.874 4.621.717.718 2.418.85 4.558.874a1.49 1.49 0 0 0 1.5-1.495c0-.828-.671-1.498-1.5-1.504a46.623 46.623 0 0 1-1.845-.04c-.143-.031-.29-.083-.378-.17-.087-.087-.138-.233-.17-.376a49.106 49.106 0 0 1-.04-1.91Z" fill="currentColor"></path></svg>
    )
}


export const SocialMediaIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M29 13.752c0 4.213 0 6.32-1.011 7.833a6 6 0 0 1-1.656 1.656c-1.351.903-3.176 1-6.552 1.01l-2.055 3.508c-.773 1.319-2.68 1.319-3.452 0L12.22 24.25c-3.376-.01-5.2-.107-6.552-1.01a6.001 6.001 0 0 1-1.656-1.656C3 20.072 3 17.965 3 13.752s0-6.32 1.011-7.833a6 6 0 0 1 1.656-1.656C7.18 3.252 9.287 3.252 13.5 3.252h5c4.213 0 6.32 0 7.833 1.011.656.438 1.218 1 1.656 1.656C29 7.432 29 9.539 29 13.752Zm-7.298.707c.207-.31.38-.655.483-1 .07-.276.138-.586.104-.897a3.311 3.311 0 0 0-3.31-3.31c-1.311 0-2.45.793-2.966 1.896h-.035a3.298 3.298 0 0 0-2.965-1.896c-.897 0-1.69.345-2.276.931a3.487 3.487 0 0 0-.966 1.828c-.034.172-.069.344-.069.551 0 .31.07.621.173.931.103.38.276.724.517 1.035l.035.034v.035c.068.103.172.241.31.414.62.827 1.965 2.31 4.586 4.24h1.414c3.38-2.482 4.655-4.24 4.965-4.792Z" fill="currentColor"></path></svg>
    )
}

export const CustomSizeIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.165V19a2 2 0 0 0 2 2h12.835c-.06-.05-.12-.102-.176-.159L16.318 19.5H5a.5.5 0 0 1-.5-.5V7.682L3.159 6.341A2.275 2.275 0 0 1 3 6.165ZM17.28 4.22a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H6.56l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06L6.56 4h8.38l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2ZM19.78 19.78a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V9.06l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06L20 9.06v8.38l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2Z" fill="currentColor"></path></svg>
    )
}

export const UploadIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.734 8.438C6.008 5.64 8.387 3.5 11.208 3.5a5.5 5.5 0 0 1 5.422 4.562.24.24 0 0 0 .202.19c3.026.232 5.418 2.795 5.418 5.866 0 3.25-2.642 5.882-5.896 5.882H14.75a.75.75 0 0 1 0-1.5h1.604a4.389 4.389 0 0 0 4.396-4.382c0-2.287-1.788-4.199-4.033-4.371a1.738 1.738 0 0 1-1.565-1.433A4 4 0 0 0 11.208 5C9.151 5 7.425 6.563 7.227 8.584a1.69 1.69 0 0 1-1.096 1.42 4.384 4.384 0 0 0-2.881 4.114A4.389 4.389 0 0 0 7.646 18.5h.104A4.25 4.25 0 0 0 12 14.25v-.95L9.99 15.32a.75.75 0 1 1-1.063-1.059l3.276-3.29a.75.75 0 0 1 1.063 0l3.276 3.29a.75.75 0 1 1-1.063 1.059L13.5 13.33v.919A5.75 5.75 0 0 1 7.75 20h-.104c-3.254 0-5.896-2.631-5.896-5.882a5.884 5.884 0 0 1 3.865-5.523.191.191 0 0 0 .12-.157Z" fill="currentColor"></path></svg>
    )
}

export const MoreIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.566 13a2.566 2.566 0 1 1 0 5.131 2.566 2.566 0 0 1 0-5.131Zm6.414 0a2.566 2.566 0 1 1 0 5.131 2.566 2.566 0 0 1 0-5.131ZM25 15.566a2.566 2.566 0 1 0-5.131 0 2.566 2.566 0 0 0 5.131 0Z" fill="currentColor"></path></svg>
    )
}


export const SparkleIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.333 13.144a12.884 12.884 0 0 1 .927-.235l.209-.044a.5.5 0 0 0 0-1 14.663 14.663 0 0 1-1.138-.276c-2.8-.815-4.275-2.382-5.082-5.113a13.224 13.224 0 0 1-.103-.37l-.084-.331a16.311 16.311 0 0 1-.12-.539.493.493 0 0 0-.473-.371.493.493 0 0 0-.475.376 14.724 14.724 0 0 1-.366 1.45l-.002.006c-.832 2.648-2.348 4.104-5.021 4.888a12.601 12.601 0 0 1-.927.235l-.21.045a.5.5 0 0 0 0 1 14.723 14.723 0 0 1 1.14.275c2.809.813 4.278 2.362 5.082 5.105l.083.299.02.077c.019-.016.06.332.08.317.023.098.046.198.068.3l.009.04.036.174a.493.493 0 0 0 .483.413.493.493 0 0 0 .477-.387 16.114 16.114 0 0 1 .196-.859 12.797 12.797 0 0 1 .17-.593l.002-.005c.832-2.645 2.346-4.094 5.019-4.877Zm-5.864 2.934a7.982 7.982 0 0 1 1.51-2.162 7.922 7.922 0 0 1 2.193-1.55 7.877 7.877 0 0 1-2.246-1.612 8.07 8.07 0 0 1-1.454-2.115 8.007 8.007 0 0 1-1.511 2.168A7.927 7.927 0 0 1 8.77 12.36a7.841 7.841 0 0 1 2.233 1.592 7.99 7.99 0 0 1 1.466 2.127Zm4.293-10.43a.153.153 0 0 0-.153.152h.004c0 .084.062.14.145.156l.023.006.032.007.008.003a3.2 3.2 0 0 1 1.104.508 2.487 2.487 0 0 1 .284.246l.003.002A2.521 2.521 0 0 1 18.872 8a4.606 4.606 0 0 1 .015.076.153.153 0 0 0 .152.154v-.004c.084 0 .14-.062.156-.145l.006-.023.008-.032c0-.002 0-.005.002-.008.113-.432.284-.801.508-1.104a2.479 2.479 0 0 1 .425-.444 2.521 2.521 0 0 1 1.172-.517.15.15 0 0 0 .15-.153c0-.084-.063-.14-.145-.156l-.024-.006-.032-.007-.008-.003a3.197 3.197 0 0 1-1.105-.509 2.5 2.5 0 0 1-.283-.245l-.002-.002a2.36 2.36 0 0 1-.158-.177 2.521 2.521 0 0 1-.517-1.172.153.153 0 0 0-.153-.153v.004c-.084 0-.14.062-.156.144l-.006.024-.007.032-.003.008a3.197 3.197 0 0 1-.508 1.104 2.48 2.48 0 0 1-.246.284l-.002.002a2.362 2.362 0 0 1-.177.158 2.52 2.52 0 0 1-1.115.506 3.248 3.248 0 0 1-.057.011ZM6.848 19.66a2.074 2.074 0 0 1 .93-.478 3.17 3.17 0 0 1 .14-.032.218.218 0 0 0 0-.436 5.028 5.028 0 0 1-.092-.028c-.386-.124-.706-.277-.963-.482a1.9 1.9 0 0 1-.225-.21 2.073 2.073 0 0 1-.47-.921 3.1 3.1 0 0 1-.031-.14.218.218 0 1 0-.436 0 5.43 5.43 0 0 1-.029.092c-.123.386-.277.706-.481.963a1.983 1.983 0 0 1-.21.225c-.242.22-.542.376-.922.47a3.036 3.036 0 0 1-.14.031.218.218 0 0 0 0 .436l.093.03c.385.122.705.276.962.48a2.105 2.105 0 0 1 .217.202l.008.009c.22.241.376.541.47.921a3.1 3.1 0 0 1 .032.14.218.218 0 0 0 .436 0l.028-.093c.124-.385.277-.705.482-.962a1.9 1.9 0 0 1 .201-.217Z" fill="currentColor"></path><path d="M9.6 5.613C7.91 5.466 6.98 4.874 6.484 3.7c-.179-.423-.304-.917-.384-1.5 0-.1-.1-.2-.2-.2s-.2.1-.2.2c-.08.583-.205 1.077-.384 1.5C4.821 4.874 3.891 5.466 2.2 5.613c-.1 0-.2.1-.2.2s.1.2.2.2c2.1.4 3.2 1.187 3.5 3.387 0 .1.1.2.2.2s.2-.1.2-.2c.3-2.2 1.4-2.987 3.5-3.387.1 0 .2-.1.2-.2s-.1-.2-.2-.2Z" fill="currentColor"></path></svg>
    )
}


export const SignagesIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#_3791938721__a)"><path d="M16.679 10.392a2.509 2.509 0 0 1-2.502 2.501H3.18A2.509 2.509 0 0 1 .68 10.391V5.414A2.509 2.509 0 0 1 3.18 2.912h10.997a2.509 2.509 0 0 1 2.502 2.501v4.979Z" fill="#A548FF"></path><path d="M14.127 3.852h-.02v-1.67a.498.498 0 0 0-.15-.34L12.266.15a.498.498 0 0 0-.34-.15h-7.19C3.926 0 3.26.665 3.26 1.476v2.376h-.02" fill="#A548FF"></path><path d="M14.127 3.852h-.02V1.476c0-.81-.665-1.476-1.476-1.476h-7.19a.508.508 0 0 0-.34.15l-1.69 1.691a.508.508 0 0 0-.15.34v1.671h-.02" fill="#A548FF"></path><path d="M12.586 4.943H4.761V1.991c0-.28.235-.49.49-.49h5.394v1.926h1.926v1.521h.015v-.005Z" fill="#fff"></path><path d="M4.781 4.943v-1.52h1.926V1.495h5.394c.255 0 .49.215.49.49v2.952h-7.83.02v.005Z" fill="#fff"></path><path d="M14.107 10.807H3.24v3.122l.02.405c0 .81.666 1.476 1.476 1.476h7.875c.81 0 1.476-.665 1.476-1.476l.02-.405" fill="#A548FF"></path><path d="M12.586 13.819c0 .28-.235.49-.49.49H5.272a.494.494 0 0 1-.49-.49v-1.431h7.804v1.43Z" fill="#fff"></path></g><defs><clipPath id="_3791938721__a"><path fill="#fff" transform="translate(.679)" d="M0 0h16v15.81H0z"></path></clipPath></defs></svg>
    )
}


export const ImageIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2Zm-.5 2v10c0 .271.229.5.5.5h1.221l3.442-4.33.385-.482a2 2 0 0 1 3.114-.011l.464.571 2.794-3.492a2 2 0 0 1 3.114-.011l1.966 2.293V7c0-.271-.229-.5-.5-.5H4c-.271 0-.5.229-.5.5Zm3.637 10.5h7.008l-3.148-3.878a.5.5 0 0 0-.778.003L7.137 17.5Zm8.94 0H20c.271 0 .5-.229.499-.5v-2.491l-3.13-3.818a.5.5 0 0 0-.778.003l-2.998 3.746 2.484 3.06ZM8 9.547a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path></svg>
    )
}


export const InstagramIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.85 6.404c-1.388-1.388-3.794-1.388-8.42-1.388h-3.98c-4.719 0-7.032 0-8.513 1.48-1.573 1.481-1.573 3.794-1.573 8.514v2.313c0 4.72 0 7.033 1.48 8.514 1.481 1.48 3.794 1.48 8.514 1.48h3.979c4.72 0 7.033 0 8.514-1.48 1.48-1.48 1.48-3.887 1.48-8.606v-2.314c.093-4.627.093-7.125-1.48-8.513Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.214 19.602c.157-.428.242-.88.253-1.336 0-.224.005-.39.01-.593.01-.327.023-.752.023-1.673 0-1.496 0-1.683-.033-2.266a4.176 4.176 0 0 0-.253-1.336 2.717 2.717 0 0 0-.638-.974 2.586 2.586 0 0 0-.974-.633 4.016 4.016 0 0 0-1.336-.258c-.583-.033-.77-.033-2.266-.033s-1.683 0-2.266.033c-.457.01-.909.097-1.336.258a2.63 2.63 0 0 0-.974.633 2.585 2.585 0 0 0-.633.974 4.038 4.038 0 0 0-.258 1.336c-.033.583-.033.77-.033 2.266s0 1.683.033 2.266c.01.457.097.909.258 1.337.135.368.351.7.633.973.273.28.606.497.974.633.427.161.879.248 1.336.258.583.033.77.033 2.266.033s1.683 0 2.266-.033c.457-.01.909-.097 1.337-.258.368-.135.7-.351.973-.633.282-.274.5-.606.638-.974Zm-2.66-7.094a.66.66 0 1 1 .734 1.099.66.66 0 0 1-.734-1.099Zm-4.136 1.143a2.821 2.821 0 1 1 3.143 4.686 2.821 2.821 0 0 1-3.143-4.686Zm.549 3.866a1.832 1.832 0 1 0 2.035-3.046 1.832 1.832 0 0 0-2.035 3.046Z" fill="#fff"></path></svg>
    )
}

export const FacebookIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.85 6.404c-1.388-1.388-3.794-1.388-8.42-1.388h-3.98c-4.719 0-7.032 0-8.513 1.48-1.573 1.481-1.573 3.794-1.573 8.514v2.313c0 4.72 0 7.033 1.48 8.514 1.481 1.48 3.794 1.48 8.514 1.48h3.979c4.72 0 7.033 0 8.514-1.48 1.48-1.48 1.48-3.887 1.48-8.606v-2.314c.093-4.627.093-7.125-1.48-8.513Z" fill="currentColor"></path><path d="M18.939 12.423a.158.158 0 0 1-.158.158h-1.008c-.664 0-.786.26-.786.77v1.057h1.728a.158.158 0 0 1 .157.178l-.246 1.904a.159.159 0 0 1-.157.138h-1.482v4.727a.158.158 0 0 1-.158.158h-1.965a.158.158 0 0 1-.159-.158v-4.727H13.22a.158.158 0 0 1-.158-.158v-1.904a.158.158 0 0 1 .158-.158h1.487v-1.246c0-1.65.998-2.675 2.606-2.675.691 0 1.302.052 1.49.076a.158.158 0 0 1 .137.157v1.703Z" fill="#fff"></path></svg>
    )
}

export const WhatsAppIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.85 6.404c-1.388-1.388-3.794-1.388-8.42-1.388h-3.98c-4.719 0-7.032 0-8.513 1.48-1.573 1.481-1.573 3.794-1.573 8.514v2.313c0 4.72 0 7.033 1.48 8.514 1.481 1.48 3.794 1.48 8.514 1.48h3.979c4.72 0 7.033 0 8.514-1.48 1.48-1.48 1.48-3.887 1.48-8.606v-2.314c.093-4.627.093-7.125-1.48-8.513Z" fill="currentColor"></path><path d="m11 21.5.773-2.825a5.44 5.44 0 0 1-.727-2.725 5.459 5.459 0 0 1 5.45-5.45c1.459 0 2.827.568 3.857 1.599a5.42 5.42 0 0 1 1.595 3.856 5.459 5.459 0 0 1-5.451 5.45 5.454 5.454 0 0 1-2.607-.663L11 21.5Zm8.243-4.25c-.034-.056-.125-.09-.262-.158a22.161 22.161 0 0 0-.93-.444c-.125-.045-.216-.068-.307.069-.09.136-.352.443-.431.534-.08.09-.16.102-.296.034-.136-.069-.575-.212-1.095-.676a4.103 4.103 0 0 1-.758-.944c-.079-.136-.008-.21.06-.278.061-.06.136-.159.204-.239.07-.078.092-.135.138-.226.045-.091.023-.171-.011-.24-.035-.067-.307-.738-.42-1.01-.111-.266-.224-.23-.307-.234l-.261-.005a.5.5 0 0 0-.363.17c-.125.137-.477.466-.477 1.137 0 .67.488 1.318.556 1.409.068.09.96 1.467 2.327 2.056.325.14.578.225.776.287.326.104.623.09.858.055.262-.04.806-.33.92-.648.113-.319.113-.591.079-.648Z" fill="#fff"></path></svg>
    )
}


export const YoutubeIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.146 21.797a120.498 120.498 0 0 1 0-11.593c.089-1.765 1.654-3.32 3.429-3.429 5.63-.318 11.22-.318 16.85 0 1.776.109 3.34 1.664 3.43 3.429.185 3.862.185 7.73 0 11.593-.09 1.764-1.655 3.32-3.43 3.428-5.63.318-11.22.318-16.85 0-1.776-.109-3.34-1.664-3.43-3.428Z" fill="currentColor"></path><path d="M21.193 13.32c-.102-.561-.586-.97-1.149-1.097-.84-.179-2.398-.306-4.083-.306-1.684 0-3.266.127-4.108.306-.561.127-1.047.51-1.149 1.097A16.742 16.742 0 0 0 10.5 16c0 1.148.102 2.042.23 2.68.102.561.586.97 1.148 1.097.893.179 2.424.306 4.109.306s3.216-.127 4.11-.306c.56-.127 1.045-.51 1.148-1.097.101-.638.23-1.558.255-2.68a17.84 17.84 0 0 0-.307-2.68Zm-6.61 4.466v-3.573L17.697 16l-3.114 1.787Z" fill="#fff"></path></svg>
    )
}


export const TwitterIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.146 21.797a120.498 120.498 0 0 1 0-11.593c.089-1.765 1.654-3.32 3.429-3.429 5.63-.318 11.22-.318 16.85 0 1.776.109 3.34 1.664 3.43 3.429.185 3.862.185 7.73 0 11.593-.09 1.764-1.655 3.32-3.43 3.428-5.63.318-11.22.318-16.85 0-1.776-.109-3.34-1.664-3.43-3.428Z" fill="currentColor"></path><path d="M11.326 11.579h2.765l2.555 3.437 3.181-3.516.756.013-3.56 3.998 3.651 4.91H17.91l-2.412-3.203-2.946 3.282h-.744l3.324-3.75-3.806-5.171Z" fill="#fff"></path></svg>
    )
}


export const ElementsIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.55 11.242a1.502 1.502 0 0 0 1.42 0l.002-.002.004-.002.01-.005.026-.015.084-.048a9.986 9.986 0 0 0 1.14-.787c.638-.51 1.478-1.312 2.026-2.375a2.991 2.991 0 0 0-4.003-4.16A2.991 2.991 0 0 0 3.2 7.912c.54 1.103 1.402 1.93 2.055 2.454a10.007 10.007 0 0 0 1.25.854l.028.015.01.005.003.002.002.001ZM4.53 7.217c.352.731.918 1.34 1.444 1.794a8.454 8.454 0 0 0 1.285.91s.086-.047.229-.136a8.452 8.452 0 0 0 1.054-.776c.51-.442 1.058-1.03 1.41-1.734a1.491 1.491 0 1 0-2.693-1.208 1.493 1.493 0 0 0-1.435-1.084A1.491 1.491 0 0 0 4.53 7.217ZM17.536 4.011a1.026 1.026 0 0 0-1.775 0l-3.307 5.694a1.026 1.026 0 0 0 .888 1.542h6.614c.79 0 1.285-.857.887-1.542l-3.307-5.694ZM16.65 5.47l-2.485 4.277h4.969L16.649 5.47ZM20.861 17.168a4.213 4.213 0 1 1-8.425 0 4.213 4.213 0 0 1 8.425 0Zm-1.5 0a2.713 2.713 0 1 1-5.425 0 2.713 2.713 0 0 1 5.425 0ZM3.406 14.086a.77.77 0 0 1 .77-.77h6.14a.77.77 0 0 1 .77.77v6.294c0 .34-.275.616-.615.616H4.176a.77.77 0 0 1-.77-.77v-6.14Zm1.5 5.41v-4.68h4.68v4.68h-4.68Z" fill="currentColor"></path></svg>
    )
}

export const ActiveElementsIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.55 3.051a2.694 2.694 0 0 0-2.351 4.012c.593 1.222 1.572 2.178 2.365 2.815a11.86 11.86 0 0 0 1.37.947 6 6 0 0 0 .092.053l.027.015.008.004.003.002h.002a.749.749 0 0 0 .71 0h.001l.003-.002.008-.004.026-.015a9.301 9.301 0 0 0 .408-.246c.264-.168.625-.414 1.023-.732.777-.622 1.738-1.553 2.34-2.743a2.694 2.694 0 0 0-4.166-3.35 2.684 2.684 0 0 0-1.87-.756ZM15.922 3.58a1.027 1.027 0 0 1 1.776 0l3.307 5.694a1.026 1.026 0 0 1-.888 1.542h-6.614a1.026 1.026 0 0 1-.887-1.542l3.306-5.694ZM16.81 20.949a4.213 4.213 0 1 0 0-8.425 4.213 4.213 0 0 0 0 8.425ZM3.568 13.654a.77.77 0 0 1 .77-.77h6.14a.77.77 0 0 1 .77.77v6.294c0 .34-.276.616-.616.616H4.338a.77.77 0 0 1-.77-.77v-6.14Z" fill="currentColor"></path></svg>
    )
}


export const TextIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.266 5.792a1.5 1.5 0 0 1 1.5-1.5h12.468a1.5 1.5 0 0 1 1.5 1.5v1.85a.75.75 0 0 1-1.5 0v-1.35a.5.5 0 0 0-.5-.5H12.75v11.939a.5.5 0 0 0 .5.5h1.875a.75.75 0 0 1 0 1.5h-6.25a.75.75 0 1 1 0-1.5h1.875a.5.5 0 0 0 .5-.5V5.792H6.266a.5.5 0 0 0-.5.5V7.67a.75.75 0 1 1-1.5 0V5.792Z" fill="currentColor"></path></svg>
    )
}

export const ActiveTextIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 6.497a.5.5 0 0 0-.5.5v.79a1.25 1.25 0 0 1-2.5 0v-1.79a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V7.76a1.25 1.25 0 0 1-2.5 0v-.763a.5.5 0 0 0-.5-.5h-3.75v11.049a.5.5 0 0 0 .5.5h1.27a1.25 1.25 0 0 1 0 2.5H8.98a1.25 1.25 0 1 1 0-2.5h1.27a.5.5 0 0 0 .5-.5V6.497H7Z" fill="currentColor"></path></svg>
    )
}

export const ActiveUploadIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.23 3.01c-2.688 0-4.955 2.036-5.232 4.7a.381.381 0 0 1-.24.313 5.65 5.65 0 0 0 1.98 10.94h.3a4.39 4.39 0 0 0 3.994-4.373v-1.696l-1.74 1.74a.75.75 0 1 1-1.06-1.06l3.02-3.02a.75.75 0 0 1 1.06 0l3.02 3.02a.75.75 0 0 1-1.06 1.06l-1.74-1.74v1.696c0 1.735-.75 3.295-1.944 4.373h4.686a5.649 5.649 0 0 0 5.649-5.649c0-2.931-2.265-5.383-5.14-5.63a.435.435 0 0 1-.375-.347A5.265 5.265 0 0 0 11.23 3.01Z" fill="currentColor"></path></svg>
    )
}

export const DrawIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.07 3.456a3.135 3.135 0 0 0-4.434 0L10.25 8.843a3.38 3.38 0 0 0-.884 1.55l-.845 3.292c-.205.8.522 1.527 1.322 1.323l3.278-.837a3.384 3.384 0 0 0 1.555-.886L20.07 7.89a3.135 3.135 0 0 0 0-4.434Zm-2.117 4.43 1.057-1.057a1.635 1.635 0 0 0-2.313-2.313l-1.056 1.057 2.312 2.312Zm-1.166 1.166-3.172 3.172c-.24.24-.539.41-.866.493l-2.602.665.67-2.616a1.88 1.88 0 0 1 .492-.862l3.165-3.164 2.313 2.312Z" fill="currentColor"></path><path d="M5.144 15.022a.641.641 0 1 0 0 1.282h13.751a2.109 2.109 0 0 1 0 4.218H9.194a.75.75 0 0 1 0-1.5h9.701a.609.609 0 1 0 0-1.218H5.144a2.141 2.141 0 0 1 0-4.282h1.862v1.5H5.144Z" fill="currentColor"></path></svg>
    )
}


export const ActiveDrawIcon = ({ className, style }:IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.63 3.933a3.135 3.135 0 0 1 4.434 4.434l-1.056 1.057-4.434-4.434 1.056-1.057Zm-2.223 2.224 4.434 4.434-3.172 3.172c-.43.43-.967.735-1.556.886l-3.278.837a1.087 1.087 0 0 1-1.321-1.323l.844-3.292a3.38 3.38 0 0 1 .884-1.55l3.165-3.164Zm-8.91 9.984c0-.354.286-.641.64-.641H7V14H5.137a2.141 2.141 0 1 0 0 4.282H18.89a.609.609 0 1 1 0 1.218H9.188a.75.75 0 0 0 0 1.5h9.7a2.109 2.109 0 1 0 0-4.218H5.139a.641.641 0 0 1-.642-.64Z" fill="currentColor"></path></svg>
    )
}

export const MagicWriteIcons = ({ className, style }: IconProps) => {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.444 5.489c-2.033-.407-2.91-1.387-3.317-3.37a.25.25 0 0 0-.241-.189.25.25 0 0 0-.241.192c-.407 2.033-1.335 2.96-3.317 3.367a.254.254 0 0 0 0 .508c2.033.407 2.906 1.366 3.313 3.349a.25.25 0 0 0 .245.21.25.25 0 0 0 .243-.197c.406-2.034 1.333-2.955 3.315-3.362a.254.254 0 1 0 0-.508Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.223 5.24a3.057 3.057 0 0 0-4.323 0L6.87 15.267a5.419 5.419 0 0 0-1.295 2.08l-1.12 3.282a1.087 1.087 0 0 0 1.378 1.38L9.1 20.896a5.42 5.42 0 0 0 2.086-1.299L21.223 9.562a3.057 3.057 0 0 0 0-4.323Zm-2.134 4.334 1.073-1.073A1.557 1.557 0 1 0 17.961 6.3l-1.073 1.073 2.201 2.201Zm-1.06 1.06-2.202-2.2-6.633 6.632a6.214 6.214 0 0 1 2.2 2.204l6.635-6.635Zm-7.743 7.744a4.71 4.71 0 0 0-2.199-2.204l-.156.155a3.918 3.918 0 0 0-.937 1.505l-.53 1.55c.28.113.501.337.61.618l1.543-.525a3.922 3.922 0 0 0 1.509-.94l.16-.16Z" fill="currentColor"></path><path d="M3.97 8.141c.17.858.67 1.271 1.527 1.528a.187.187 0 0 1 0 .374c-.857.171-1.27.67-1.528 1.528a.187.187 0 0 1-.373 0c-.172-.858-.671-1.27-1.528-1.528a.187.187 0 1 1 0-.374c.857-.171 1.27-.67 1.527-1.528a.187.187 0 0 1 .374 0Z" fill="currentColor"></path></svg>
    )
}