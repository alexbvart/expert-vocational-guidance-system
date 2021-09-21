export const CreateCasm = ({data}) => {
    const answer = Object.entries(data).map(([key, value]) => {
        return SchemeOfCasmResponse({key,value})
    });
    return answer
}

export const  SchemeOfCasmResponse = ({key,value}) => {
    const answer_a = value.includes("a");
    const answer_b = value.includes("b");
    return {            
        "casm_id":key,
        "answer_a":answer_a,
        "answer_b":answer_b
    }}