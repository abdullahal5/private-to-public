const Container = ({children}) => {
    return (
        <div className="max-x-[2520px] mx-auto xl:px-20 md:px-10  sm:px-11">
            {children}
        </div>
    );
};

export default Container;