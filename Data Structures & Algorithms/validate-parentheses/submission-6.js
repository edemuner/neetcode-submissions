class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let openingStack = [];
        const opening = ['(', '[', '{'];
        if(s.length % 2 !== 0) return false;

        for (let i = 0; i < s.length; i++){
            const current = s[i];
            if(opening.includes(current)){
                openingStack.push(current);
                continue;
            }

            const latestOpening = openingStack[openingStack.length - 1];
            switch(current){
                case ')' : if(latestOpening !== '('){
                    return false;
                } else {
                    openingStack.pop();
                    continue;
                } 

                case ']' : if(latestOpening !== '['){
                    return false;
                } else {
                    openingStack.pop();
                    continue;
                } 

                case '}' : if(latestOpening !== '{'){
                    return false;
                } else {
                    openingStack.pop();
                    continue;
                } 

            }
        }

        if(openingStack.length !== 0) return false;
        return true;
        
    }
}

