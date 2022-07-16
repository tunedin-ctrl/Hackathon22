class QueryCard    {
    constructor() {
        this.state = {
            fields: [],
        };
    }

    addField(field)  {
        this.state.fields.push(field);
    }

    /**
     * Render the QueryCardFields individually on a QueryCard
     */
    render()    {
        for (let i = 0; i < this.state.fields.length; ++i)  {
            this.state.fields[i].render();
        }
    }
}