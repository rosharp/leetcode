class Solution:
    def longestCommonPrefix(self, strs: List[str]):
        # if no common substring => return "" 
        if len(strs) == 0: return ""

        # by default, equals the first string in an array
        longPref = strs[0]

        for string in strs:

            # for max length of the first string  
            for i in range(0, len(longPref)):

                # if i reaches its length or if the symbol under i is different
                if (i >= len(string) or longPref[i] != string[i]):
                    
                    # longest substring is equal to the string from 0 to i
                    longPref = longPref[0:i]

                    break

        return longPref
