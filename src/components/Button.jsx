export default function Button({
  children: description = 'Descrição do botão',
  onButtonClick = null,
  colorClass = 'bg-gray-200',
  textColor = 'text-white',
  textWeight = 'font-semibold',
  type = 'button',
}) {
  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <button
      className={`p-2 m-1 rounded-md ${colorClass} ${textColor} ${textWeight}`}
      onClick={handleButtonClick}
      type={type}
    >
      {description}
    </button>
  );
}
