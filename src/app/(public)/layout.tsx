export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-gradient-login bg-contain bg-no-repeat bg-left flex flex-row">
            <div className="h-screen w-2/5"></div>
            <div className="bg-white pt-8 pb-6 px-10 rounded-ss-3xl rounded-es-3xl h-screen w-3/5">{children}</div>
        </div>
    );
}
