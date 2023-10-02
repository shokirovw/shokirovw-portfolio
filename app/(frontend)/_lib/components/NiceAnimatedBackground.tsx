export default function AnimatedBackground ({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <div className={"layout min-h-[100vh] flex flex-col layout-animate"}>
            { children }
        </div>
    );
}