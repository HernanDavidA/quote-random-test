interface ButtonProps {
    onClick: () => void;
  }
  
  export default function NewQuoteButton({ onClick }: ButtonProps) {
    return (
      <button
        onClick={onClick}
        className="btn btn-outline-light"
      >
        New quote
      </button>
    );
  }
  