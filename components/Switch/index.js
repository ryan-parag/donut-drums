import useKeypress from 'react-use-keypress';

const Switch = ({item, active, play, keyPress}) => {

  const handleClick = () => {
    play()
  }

  useKeypress(keyPress, () => {
    play()
  });

  return(
    <div className={`relative flex flex-col`}>
      <button
        className={`flex items-center justify-between relative z-10 transition w-full px-3 py-2 rounded-md font-semibold text-xs uppercase tracking-widest text-slate-600 ${active ? 'top-0 shadow-inner bg-slate-300 ring-4 ring-black ring-opacity-10' : '-top-1 bg-slate-200 shadow-sm'}`}
        onClick={() => handleClick()}
      >
        <span className={`${active ? 'text-cyan-600 blur-xs' : 'text-slate-600'}`}>
          {item.name}
        </span>
        <span className="text-xs opacity-50">{keyPress}</span>
      </button>
      <div className="w-full h-2 bg-slate-400 -top-2 relative rounded-b-md"/>
    </div>
  )
}

export default Switch