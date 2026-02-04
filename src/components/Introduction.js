//import profileImage from './assets/images/myPicture.jpg';

const Introduction = () => {
    const introContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '40px',
        marginBottom: '50px',
        width: '100%',
    };

    const profileImageStyle = {
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '4px solid rgba(255, 255, 255, 0.5)',
        flexShrink: 0
    };

    const textContentStyle = {
        textAlign: 'left',
        color: '#333',
        lineHeight: '1.8'
    };

    return (
        <div style={introContainerStyle}>
            <img alt="Profile" style={profileImageStyle} />

            <div style={textContentStyle}>
                <h2 style={{ margin: '0 0 10px 0', fontSize: '1.8rem' }}>
                안녕하세요, 김보연입니다.
                </h2>
                <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '500' }}>
                가나다라마바사아자차카타파하
                </p>
                <p style={{ marginTop: '15px', fontSize: '1rem', color: '#555' }}>
                가나다라마바사아자차카타파하 <br />
                가나다라마바사아자차카타파하 <br />
                가나다라마바사아자차카타파하
                </p>
            </div>
        </div>
    );
};

export default Introduction;