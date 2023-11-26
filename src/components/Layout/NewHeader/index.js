function NewHeader({ children }) {
    return (
        <div>
            <h2>New Header</h2>
            <div className="container">{children}</div>
        </div>
    );
}

export default NewHeader;
