interface QuoteDisplayProps {
    quote: string;
    author: string;
    tags: string[]
  }
  
  export default function QuoteDisplay({ quote, author, tags }: QuoteDisplayProps) {
    return (
      <div className="quote-container">

        <div> 
            <h2 className="">Tags</h2>
            <div className="quote-tags">
                {tags.map((tag) => (
                    <div key={tag} className="tag">
                        {tag}
                    </div>
                ))}
            </div>
            
        </div>

        <p className="quote-text">"{quote}"</p>
        <p className="quote-author">- {author}</p>

      </div>
    );
  }
  