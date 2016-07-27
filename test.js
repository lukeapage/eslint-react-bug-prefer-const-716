function X(props) {
    const { filterList } = props;

    let filters = _.chain(filterList)
        .map((filter, index) =>
            <Z/>
        )
        .value();

    return (
        <div>
            {filters}
        </div>
    );
}
