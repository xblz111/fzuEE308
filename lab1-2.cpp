#include<iostream>
#include<fstream>
#include<cstdlib>
#include<iomanip>
#include<vector>
#include<algorithm>
using namespace std;

string keyword[32]={"auto","break","case","char","const","continue","default","double",
	"do","else","enum","extern","float","for","goto","if","int","long",
	"register","return","short","signed","sizeof","static","struct",
	"switch","typedef","union","unsigned","void","volatile","while"
};


int main(){
	
	string file;
	int level;
	cout<<"Enter the file: ";
	cin>>file;
	ifstream inFile;
	inFile.open(file.c_str());
	cout<<"Enter the level: ";
	cin>>level;
	
	int keyword_num=0;
	vector <string> str;
	string s;
	while(getline(inFile,s)){
		int i=1,j=1;
		while(i<int(s.size()) && j<int(s.size())){
			if(isalpha(s[i])){
				if(!isalpha(s[j])){
					string a=s.substr(i,j-i);
					str.push_back(a);
					for(int k=0;k<32;k++){
						if(a==keyword[k]){
							keyword_num+=1;
						}
					}
					i=j+1;
					j=1;
				}
				else
					j++;
			}
			else{
				i++;
				j=i;
			}
		}
	}
	cout<<"total num: "<<keyword_num<<endl;
	
	int switch_num=0;
	int case_num=0;
	vector <int> allcase_num;
	if(level>=2){
		int i=0;
		while(i<int(str.size())){
			if(str[i]=="switch"){
				switch_num+=1;
				for(int j=i+1;j<int(str.size());j++){
					if(str[j]=="case"){
						case_num+=1;
					}
					if(str[j]=="switch" || j==int(str.size()-1)){
						allcase_num.push_back(case_num);
						break;
					}
				}
				
			}
			i++;
		}
		cout<<"switch num: "<<switch_num<<endl;
		cout<<"case num: ";
		for(int i=0;i<int(str.size());i++){
			cout<<allcase_num[i]<<" ";
		}
		cout<<endl;
	}

	int ifelse_num=0;
	int ifelseif_num=0;
	while(getline(inFile,s)){
		if(s.find("if")){
			if(s.find("else if")){
				ifelse_num+=1;
			}
			else if(s.find("else")){
				ifelseif_num+=1;
			}
		}
	}
	cout<<"ifelse num: "<<ifelse_num<<endl;
	if(level==4){
		cout<<"ifelseif num: "<<ifelseif_num;
	}
	
}


