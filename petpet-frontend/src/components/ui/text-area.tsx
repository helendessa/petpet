type Props = {
    placeholder: string;
    rows: number;
    value?: string;
 }
 export const TextArea = ({ placeholder, rows, value }: Props) => {
    return (
       <div className="has-[:focus]:border-blue-300 flex items-center rounded-md border-2 border-blue-700">
          <textarea
             placeholder={placeholder}
             value={value}
             rows={rows}
             className="flex-1 outline-none bg-transparent p-5 h-full resize-none"
          >
          </textarea>
       </div>
    )
 }