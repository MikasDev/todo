import { VscAdd } from "react-icons/vsc";

export const Header = () => {
  return (
    <header className="flex justify-center mt-[120px]">
        <div className="relative w-[450px]">
          <input
            type="text"
            placeholder="Adicionar Tarefa"
            className="w-full rounded-[20px] p-[20px] pr-[100px]"   
          />
          <button
            type="button"
            className="
            absolute
            flex 
            justify-center 
            right-2 
            top-1/2 
            transform 
            -translate-y-1/2 
            bg-[#79D2E6] 
            text-white 
            p-3 
            rounded-[10px] 
            w-[40px]
            shadow-2xl "
          >
            <VscAdd />
          </button>
        </div>
      </header>
  )
}
