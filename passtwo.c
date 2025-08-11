
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define MAX_LINES 100
#define MAX_LABELS 50

// Structure to store label information
struct Symbol {
    char label[20];
    int address;
} symbolTable[MAX_LABELS];

int symbolCount = 0;

// Instruction Set (Simple)
typedef struct {
    char mnemonic[10];
    char opcode[10];
} Instruction;

Instruction instructions[] = {
    {"LOAD", "01"},
    {"STORE", "02"},
    {"ADD", "03"},
    {"SUB", "04"},
    {"JMP", "05"},
    {"HALT", "FF"}
};

// Function to get opcode from mnemonic
char* getOpcode(char *mnemonic) {
    for (int i = 0; i < 6; i++) {
        if (strcmp(mnemonic, instructions[i].mnemonic) == 0) {
            return instructions[i].opcode;
        }
    }
    return NULL;
}

// Function to add label to symbol table
void addLabel(char *label, int address) {
    strcpy(symbolTable[symbolCount].label, label);
    symbolTable[symbolCount].address = address;
    symbolCount++;
}

// Function to get label address
int getLabelAddress(char *label) {
    for (int i = 0; i < symbolCount; i++) {
        if (strcmp(symbolTable[i].label, label) == 0) {
            return symbolTable[i].address;
        }
    }
    return -1;
}

// *PASS 1: Build Symbol Table*
void pass1(char lines[MAX_LINES][50], int lineCount) {
    int address = 0;
    for (int i = 0; i < lineCount; i++) {
        char *token = strtok(lines[i], " ");
        
        // Check if token is a label
        if (token[strlen(token) - 1] == ':') {
            token[strlen(token) - 1] = '\0';  // Remove ':'
            addLabel(token, address);
            token = strtok(NULL, " ");
        }
        
        // If it's an instruction, increase address
        if (token != NULL) {
            address++;
        }
    }
}

// *PASS 2: Convert to Machine Code*
void pass2(char lines[MAX_LINES][50], int lineCount) {
    printf("\nMachine Code:\n");
    for (int i = 0; i < lineCount; i++) {
        char *token = strtok(lines[i], " ");

        // Ignore labels
        if (token[strlen(token) - 1] == ':') {
            token = strtok(NULL, " ");
        }

        if (token != NULL) {
            char *opcode = getOpcode(token);
            if (opcode != NULL) {
                printf("%s ", opcode);
                token = strtok(NULL, " ");

                if (token != NULL) {
                    int address = getLabelAddress(token);
                    if (address != -1) {
                        printf("%02d\n", address);
                    } else {
                        printf("%s\n", token);
                    }
                } else {
                    printf("00\n");
                }
            }
        }
    }
}

// *MAIN FUNCTION*
int main() {
    char lines[MAX_LINES][50] = {
        "START:",
        "LOAD A",
        "ADD B",
        "STORE C",
        "JMP START",
        "HALT"
    };
    int lineCount = 6;

    printf("Pass 1: Symbol Table Generation\n");
    pass1(lines, lineCount);

    // Print Symbol Table
    printf("\nSymbol Table:\n");
    for (int i = 0; i < symbolCount; i++) {
        printf("%s -> %d\n", symbolTable[i].label, symbolTable[i].address);
    }

    printf("\nPass 2: Code Generation\n");
    pass2(lines, lineCount);

    return 0;
}
