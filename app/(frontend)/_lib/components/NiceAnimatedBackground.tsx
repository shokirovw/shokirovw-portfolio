export default function AnimatedBackground ({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <div className={"min-h-[100vh] layout-animate"}>
            { children }
        </div>
    );
}