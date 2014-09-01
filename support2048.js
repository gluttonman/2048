function getPosTop(i,j){
	return 20+120*i;
}
function getPosLeft(i,j){
	return 20+120*j;
}
function getNumberBackgroundColor(number){
	switch(number){
		case 2:return "#eee4da";break;
		case 4:return "#eee4da";break;
		case 8:return "#eee4da";break;
		case 16:return "#eee4da";break;
		case 32:return "#eee4da";break;
		case 64:return "#eee4da";break;
		case 128:return "#eee4da";break;
		case 256:return "#eee4da";break;
		case 512:return "#eee4da";break;
		case 1024:return "#09c";break;
		case 2048:return "#09c";break;
		case 4096:return "#09c";break;

	}
	return "back";
}
function getNumberColor(number){
	if(number<=4){
		return "#776e65";
	}
	return "white";
}
function nospace(board){
	for(var i=0;i<4;i++){
		for (var j=0;j<4;j++) {
			if(board[i][j]==0){
				return false;
			}
		};
	}
	return true;
}
function nomove( board ){
	if (canMoveLeft(board) || canMoveRight( board) || canMoveUp(board) || canMoveDown(board)) {
		return false;
	};
	return true;
}
function canMoveLeft(board){

	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){
			if(board[i][j]!=0){
				if(board[i][j-1]==0 || board[i][j-1]==board[i][j]){
					return true;
				}	
			}
		}
	}
	return false;
}
function canMoveRight(board){
	for(var i=0;i<4;i++){
		for( var j=2;j>=0;j-- ){
			if(board[i][j]!=0){
				if(board[i][j+1]==0 || board[i][j+1]==board[i][j]){
					return true;
				}	
			}
		}
	}
	return false;
}
function canMoveUp(board){
	for(var j=0;j<4;j++){
		for(var i=1;i<4;i++){
				if(board[i][j]!=0){
					if(board[i-1][j]==0 || board[i-1][j]==board[i][j]){
						return true;
					}
				}
		}
	}
	return false;
}
function canMoveDown(board){
	for(var j=0;j<4;j++){
		for(var i=2;i>=0;i--){
				if(board[i][j]!=0){
					if(board[i+1][j]==0 || board[i+1][j]==board[i][j]){
						return true;
					}
				}
		}
	}
	return false;
}
function noBlockHorizontal(row,col1,col2,board){
	for (var i = col1+1; i <col2; i++) {
		if(board[row][i]!=0){
			return false
		}
	};
	return true;
}
function noBlockVertical(clo,row1,row2,board){
	for(var i=row1+1;i<row2;i++){
		if(board[i][clo]!=0){
			return false;
		}
	};
	return true;
}
