class TerryCard    {
    constructor() {
        this.state = {
            fields: [],
        };
    }

    addField(field)  {
        this.state.fields.push(field);
    }

    /**
     * Render the terryCardFields individually on a TerryCard
     */
    render()    {
        for (let i = 0; i < this.state.fields.length; ++i)  {
            this.state.fields[i].render();
        }
    }
}