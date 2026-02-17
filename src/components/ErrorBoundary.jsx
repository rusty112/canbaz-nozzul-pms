import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-black text-white p-8">
                    <div className="bg-red-900/20 border border-red-500 rounded p-6 max-w-2xl">
                        <h1 className="text-2xl font-bold text-red-500 mb-4">Something went wrong</h1>
                        <p className="mb-4 text-gray-300">The application encountered an error. Please try refreshing.</p>
                        <div className="bg-black/50 p-4 rounded overflow-auto font-mono text-xs text-red-300 max-h-64">
                            <strong>Error:</strong> {this.state.error && this.state.error.toString()}
                            <br />
                            <br />
                            <strong>Stack:</strong>
                            <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
