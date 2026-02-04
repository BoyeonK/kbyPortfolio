import Introduction from "./Introduction";

const MainContent = () => {
    const contentStyle = {
        width: '800px',
        maxWidth: '90%',
        padding: '40px',
        
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
        textAlign: 'center',
        color: '#333',
        fontSize: '1.5rem'
    };

    return (
        <div style={contentStyle}>
            <Introduction/>
            <h2>프로젝트 쫘라락</h2>
            <p>가나다라마바사아자차카타파하</p>
            <hr style={{ margin: '20px 0', border: '0.5px solid rgba(0,0,0,0.1)' }} />
            <p>가나다라마바사아자차카타파하</p>
        </div>
    );
};

export default MainContent;