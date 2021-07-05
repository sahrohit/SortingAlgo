export const bogoSort = async (
    arr: number[],
    wait: (ms: number) => Promise<null>,
    setState: React.Dispatch<React.SetStateAction<number[]>>
  ) => {
        var sorted = false;
        while(!sorted){
            arr = shuffle(arr);
            sorted = isSorted(arr);
            await wait(100)
          setState([...arr])
        }
  }
  
var isSorted = function(arr: number[]){
    for(var i = 1; i < arr.length; i++){
        if (arr[i-1] > arr[i]) {
            return false;
        }
    }
    return true;
};

function shuffle(arr: number[]){
    var count = arr.length, temp, index;

    while(count > 0){
        index = Math.floor(Math.random() * count);
        count--;

        temp = arr[count];
        arr[count] = arr[index];
        arr[index] = temp;
    }

    return arr;
}