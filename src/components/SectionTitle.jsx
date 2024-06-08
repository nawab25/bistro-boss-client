const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center w-4/12 mx-auto">
            <p className="text-yellow-600 italic mb-4">---{subHeading}---</p>
            <h1 className="text-4xl font-semibold uppercase py-4 border-y-2">{heading}</h1>
        </div>
    );
};

export default SectionTitle;