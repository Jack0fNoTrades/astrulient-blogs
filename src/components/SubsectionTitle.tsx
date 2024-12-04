export default function SubsectionTitle(title: {text: string}){
    return (
      <div className="astrulient-blog-subsection">
        <h2 className="astrulient-subsection-text">{title.text}</h2>
      </div>
  );
}