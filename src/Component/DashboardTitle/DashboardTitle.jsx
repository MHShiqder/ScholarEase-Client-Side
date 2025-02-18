

const DashboardTitle = ({title}) => {
    return (
        <div className="flex justify-center items-center md:mb-10 mb-5">
            <h3 className="text-center text-3xl md:text-5xl font-bold font-lora text-[#2E5077]">{title}</h3>
        </div>
    );
};

export default DashboardTitle;