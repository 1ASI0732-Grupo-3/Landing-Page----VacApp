interface Props {
    onAccept: () => void;
}

export const TermsModal = ({ onAccept }: Props) => {
    const handleReject = () => {
        window.close();
    };

    return (
        <div style={{
            position: "fixed",
            top: 0, left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px"
        }}>
            <div style={{
                backgroundColor: "#FFF",
                color: "#1D3620",
                maxWidth: "600px",
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                padding: "24px",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                fontFamily: "sans-serif",
                fontSize: "14px",
                lineHeight: "1.6"
            }}>
                <b>
                    <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>
                        🌐 Terms and Conditions
                    </h2>
                </b>
                <p>
                    Welcome to <strong>VacApp.com</strong>, the official landing page for our livestock management application.
                    By browsing or using this website, you agree to the following Terms and Conditions:
                </p>

                <p>
                    <strong>1. Website Use:</strong><br />
                    The content provided on <strong>VacApp.com</strong> is for informational purposes only.
                    You may not copy, reuse, or redistribute any part of this website without permission.
                </p>

                <p>
                    <strong>2. Intellectual Property:</strong><br />
                    All text, logos, visuals, and design elements on the website are owned by <strong>VacApp</strong> or its licensors.
                    Unauthorized use is strictly prohibited.
                </p>

                <p>
                    <strong>3. Accuracy of Information:</strong><br />
                    We strive to keep the website content accurate and updated.
                    However, we do not guarantee the completeness or reliability of any information presented.
                </p>

                <p>
                    <strong>4. Third-party Links:</strong><br />
                    Our website may contain links to third-party websites.
                    We are not responsible for the content or practices of these external sites.
                </p>

                <p>
                    <strong>5. Changes to the Site:</strong><br />
                    We reserve the right to modify or discontinue any part of this website at any time without notice.
                </p>

                <p>
                    <strong>6. Contact:</strong><br />
                    If you have any questions about the website or these terms, please contact us at:<br />
                    <strong>support@vacapp.com</strong>
                </p>

                <div style={{
                    marginTop: "24px",
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <button
                        onClick={onAccept}
                        style={{
                            backgroundColor: "#1D3620",
                            color: "#fff",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "6px",
                            cursor: "pointer",
                            width: "100%",
                            maxWidth: "240px"
                        }}
                    >
                        I Accept the Terms
                    </button>

                    <button
                        onClick={handleReject}
                        style={{
                            backgroundColor: "transparent",
                            color: "#1D3620",
                            border: "2px solid #1D3620",
                            padding: "10px 20px",
                            borderRadius: "6px",
                            cursor: "pointer",
                            width: "100%",
                            maxWidth: "240px"
                        }}
                    >
                        I Do Not Accept
                    </button>
                </div>
            </div>
        </div>
    );
};
