import Style from './Icon.module.css';

export const Icon = ({ iconD,method }) => {
    return (
        <button className={Style.buttonicon} onClick={method}>
            <svg className={`h-6 w-6 iconos`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={iconD}/>
            </svg>
        </button> 
    )
}