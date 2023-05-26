export function AddToCartIcon () {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 17h-11v-14h-2' />
        <path d='M6 5l6 .429m7.138 6.573l-.143 1h-13' />
        <path d='M15 6h6m-3 -3v6' />
      </svg>
    )
}
export function EditNote() {
    return (
        <svg className={`h-6 w-6 iconos`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
        </svg>
    )
}
export function Delete(){
    return (
        <svg className={`h-6 w-6 iconos delete`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
    )
}
export function Note() {
    return (
        <svg style={{color:"rgb(209, 152, 41)"}} className={`h-6 w-6`}  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
    )
}