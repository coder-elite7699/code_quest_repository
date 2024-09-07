// Initialize the Ace editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/cobalt");  // Set the editor theme
editor.session.setMode("ace/mode/c_cpp");  // Set mode to C++ for syntax highlighting

// Optional: Customize editor options
editor.setOptions({
    fontSize: "14px",
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    showPrintMargin: false
});

// copy button funtionality
function copyCode() {
    var code = editor.getValue();
    navigator.clipboard.writeText(code).then(function() {
        alert('Code copied to clipboard!');
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
}

// var initialCode = ` //Linear search
// #include<bits/stdc++.h>
// using namesapce std;
// int linear_search(vector<int> &arr, int k){
//     int n = arr.size();
//     for(int i=0;i<n;i++){
//         if(arr[i]==k)return i;
//     }
//     return -1;
// }
// int main(){
//     vector<int> arr = {8,6,4,2,5,7,9,1,3};
//     int ans = linear_search(arr, 7);
//     cout<<ans<<endl;
//     return 0;
// }
// `;

//     // Set the value inside the editor
// editor.setValue(initialCode, -1); // -1 moves the cursor to the start

document.getElementById('coy_btn').addEventListener('click', copyCode);

//download buton functionality
document.getElementById("download_btn").addEventListener("click", function() {
    var code = editor.getValue();
    var blob = new Blob([code], { type: 'text/plain' });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "code.cpp";  
    link.click();
});


// save the code