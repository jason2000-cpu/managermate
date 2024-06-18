
function CustomBtn({ text, action, type='' }){
	return (
		<button
			className="border bg-[#083778e7] rounded text-white py-1 hover:bg-[#083778] w-[100%]"
			onClick={action}
			type={type}
			>{text}</button>

	)
}

export default CustomBtn;
