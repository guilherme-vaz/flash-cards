export default function Error({children: errorMessage, padding = ''}) {
    return <span className={`bg-red-300 text-red-900 font-semibold ${padding}`}>{errorMessage}</span>
}
