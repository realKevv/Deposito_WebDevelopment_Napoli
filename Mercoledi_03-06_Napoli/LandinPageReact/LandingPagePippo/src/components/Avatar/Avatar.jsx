export function Avatar({
  imageUrl = "https://placeholder.co/150", // Ho messo un placeholder funzionante rispetto a example.com
  size = 50,
  isRound = true
}) {
  const avatarStyle = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: isRound ? '50%' : '8px',
    objectFit: 'cover' // Mantiene la foto proporzionata se non è quadrata
  };

  return (
    <img
      src={imageUrl}
      style={avatarStyle}
      alt="Profilo Utente"
    />
  );
}