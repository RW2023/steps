function app(){
  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div className="active">2</div>
        <div className="active">3</div>
      </div>

      <p className="message">Place Holder for Message</p>

      <div className="buttons">
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }}>
          Next
        </button>
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }}>
          Previous
        </button>
      </div>
    </div>
  );
}

export default app;
